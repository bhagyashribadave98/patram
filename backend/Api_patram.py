from flask import Flask,app
from flask import jsonify
from flask import request
import mysql.connector
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.secret_key = 'xyzsdfg'

mydb = mysql.connector.connect(
  user ='admin',
  password= 'admin123',
    host= 'patram-subscription-db.c4qldlczzvrr.us-east-1.rds.amazonaws.com',
    database= 'patram'

)
mysql = MySQL(app)

@app.route('/getsubcribers', methods =['GET'])

def viewall():        
    try:        
        #   from_date=request.json['month-year']
        #   print(from_date)
          if  request.method=='GET':
             sqlQuery = "select * FROM customer_master"
             cursor = mydb.cursor(dictionary=True)
             cursor.execute(sqlQuery)
             value=cursor.fetchall()
             return jsonify(value)               
          else:
             return showMessage()
    except Exception as e:
         return e
    
#  Get_Subcription_Renewals_Count
@app.route('/Get_Subcription_Renewals_Count', methods=['POST'])
def view_status( ):
    try:
         mnth= request.json['month-year']
         if mnth and request.method == 'POST':
            sqlQuery="SELECT  Date_format(Date_of_Registration,'%M') as month,SUM(Active=1) as active,SUM(Active=0) as inactive,Date_format(Date_of_Registration,'%Y') as Year from customer_master where Date_of_Registration BETWEEN DATE_SUB(%s, INTERVAL 6 MONTH) AND date_add(%s,INTERVAL 6 MONTH) group by Date_of_Registration order by Date_of_Registration asc";
            # sqlQuery="SELECT  Date_format(Date_of_Registration,'%M') as month,SUM(Active=1) as active,SUM(Active=0) as inactive,Date_format(Date_of_Registration,'%Y') as Year from customer_master where Date_of_Registration BETWEEN DATE_FORMAT(DATE_SUB(%s, INTERVAL 6 MONTH),'%Y-%m') AND DATE_FORMAT(date_add(%s,INTERVAL 6 MONTH),'%Y-%m') group by Date_of_Registration order by Date_of_Registration asc";                     
            cursor = mydb.cursor(dictionary=True)
            print("hi")
            cursor.execute(sqlQuery,[mnth,mnth])          
            value=cursor.fetchall()  
            print(value)               
            return jsonify(value)                    
         else:
            return showMessage()             
    except Exception as e:
         return e
    

@app.errorhandler(404)
def showMessage(error=None):
    message = {
        'status': 404,
        'message': 'Record not found: ' + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 404
    return respone

if __name__ == "__main__":
    app.run(debug=True)