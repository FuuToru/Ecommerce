import sqlite3

conn = sqlite3.connect('/Users/fuutoru/Library/Mobile Documents/com~apple~CloudDocs/Study/A-Learn_st_III/HK2/Phát triển ứng dụng/23_Ecommerce/src/backend_api/db.sqlite3')
cursor = conn.cursor()
cursor.execute("DELETE FROM django_session;")
conn.commit()
conn.close()
print("Success.")