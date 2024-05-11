import sqlite3

conn = sqlite3.connect('/Users/fuutoru/Library/Mobile Documents/com~apple~CloudDocs/Study/A-Learn_st_III/HK2/Phát triển ứng dụng/test-project/backend_api/db.sqlite3')
cursor = conn.cursor()
cursor.execute("DELETE FROM main_orderitems;")
conn.commit()
conn.close()
print("Success.")