import pymongo

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["leaflet"]
collection = db["markers"]

# Retrieve all data
markers = collection.find()

# Print the data
for marker in markers:
    print(marker)