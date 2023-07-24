# Get Interval

<p>Unite Your Free Time: Find Common Slots Together!</p>

# Initial Thought Process
![get time interval](https://github.com/coderKrysio/get-interval/assets/119613110/be38679a-9cfd-465f-a0ff-ad8bf58ee946)

## Documentation

---

### **API Routes**


- http://localhost:3000/api/new-room [**POST**]

  - description: post the data of one user to the mongo database.
  - [body](models/room.ts)
  - response:
    ```js
    {
    	"Success!!"
    }
    ```

- http://localhost:3000/api/[roomcode] [**GET**]

  - description: get the result i.e. the free intervals

  - params:
    ```js
    {
      "roomcode":{
                    type:string,
                    required:true
                  }
    }
    ```
  - response:
    ```json
    {
      result:[
        [number, number],
        [number, number],
        .
        .
        .
      ]
    }
    ```

- http://localhost:3000/api/[roomcode]/review [**GET**]

  - description: get the entry of all users
  - params:
    ```js
    {
      "roomcode":{
                    type:string,
                    required:true
                  }
    }
    ```
  - response:
    ```json
    [
      {
        "_id": "string",
        "username": "string",
        "roomcode": "string",
        "timeRanges": [
          [
            number,
            number
          ],
          [
            number,
            number
          ],
          .
          .
          .
        ]
      },
      {
        "_id": "string",
        "username": "string",
        "roomcode": "string",
        "timeRanges": [
          [
            number,
            number
          ],
          [
            number,
            number
          ],
          .
          .
          .
        ]
      },
    ]
    ```

- http://localhost:3000/api/[roomcode]/delete [**DELETE**]

  - description: delete the people in the roomcode from the DB
  - params:
    ```js
    {
      "roomcode":{
                    type:string,
                    required:true
                  }
    }
    ```
  - response:
    ```json
    {
      "Deleted Successfully!!"
    }
    ```
