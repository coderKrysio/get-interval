# Get Interval

<p>Unite Your Free Time: Find Common Slots Together!</p>

![Home Page](https://github.com/coderKrysio/get-interval/assets/91840205/9b64386c-ae0b-4508-85a1-810e858031e3)

### Introduction:

Welcome to our innovative web application powered by Next.js, Tailwind CSS, and MongoDB! Our platform is designed to streamline scheduling and make coordinating busy time slots a breeze. With our user-friendly interface and powerful features, you can generate a private room where up to 15 users can input their busy time intervals collaboratively. The application then processes the data and presents a cohesive timeline showcasing the common free time slots for all participants. To maintain privacy and efficiency, each private room has a two-hour timer after which the data is automatically deleted from the database.

### Aim:

Our aim is to simplify the process of finding common free time slots among a group of users. By providing a secure and easy-to-use platform, we enable teams, organizations, and friends to effortlessly schedule meetings, events, or any other group activities without the hassle of back-and-forth communication.

### How to Use:

![Form Page](https://github.com/coderKrysio/get-interval/assets/91840205/5b5d73a8-3e69-4656-8ee6-e74c6269e3a3)

-   **Create a Private Room using Generate Form Link**: Upon accessing the application, you'll have the option to create a new private room. Choose a room name and set the maximum number of users allowed (up to 15).

-   **Share the Room Link**: Share the generated private room link with the intended participants. Only those with the link can access the room, ensuring privacy and exclusivity.

-   **Input Busy Time Slots**: Each participant can input their busy time slots by specifying the start and end times for their commitments using the intuitive interface.

-   **View Common Free Time Slots**: As users input their busy time intervals, the application dynamically calculates and displays the common free time slots for all participants on an interactive timeline.

-   **Collaborate and Finalize Plans**: Utilize the timeline to identify the optimal time slots where everyone is available. Collaborate with the group and finalize your plans with ease.

### Unique Features:

![Result Page](https://github.com/coderKrysio/get-interval/assets/91840205/c5cfe923-64e8-4094-a96b-4c70b44bc77d)

-   **All-in-One Next.js Platform**: Our application is built entirely on Next.js, combining the front end and API in one seamless package. This ensures a smoother and more responsive user experience.

-   **User-Friendly Interface**: The clean and intuitive user interface makes it effortless for participants to input their busy time slots and view the common free time slots.

-   **Privacy & Security**: Each private room is accessible only through a unique link, safeguarding your data and ensuring that only authorized users can join and contribute.

-   **Automatic Data Deletion**: To respect your privacy, the data within each private room is automatically deleted after a two-hour period, minimizing any data retention concerns.

-   **Scalability for Groups**: With support for up to 15 users in a single private room, our application caters to both small and larger groups, making it ideal for teams and organizations of all sizes.

-   **Interactive Timeline**: The timeline feature provides a visual representation of overlapping free time slots, simplifying the process of finding suitable meeting times.

-   **Real-Time Updates**: As participants add their busy time slots, the timeline updates in real-time, facilitating seamless collaboration and quick decision-making.

Get started with our Next.js, Tailwind, and MongoDB-powered web application today and revolutionize the way you schedule group activities! Say goodbye to scheduling conflicts and hello to efficient planning.

# Initial Thought Process

![get time interval](https://github.com/coderKrysio/get-interval/assets/119613110/be38679a-9cfd-465f-a0ff-ad8bf58ee946)

## Documentation

---

### **API Routes**

-   http://localhost:3000/api/new-room [**POST**]

    -   description: post the data of one user to the mongo database.
    -   [body](models/room.ts)
    -   response:
        ```js
        {
            ;('string')
        }
        ```

-   http://localhost:3000/api/[roomcode] [**GET**]

    -   description: get the result i.e. the free intervals

    -   params:
        ```js
        {
          "roomcode":{
                        type:string,
                        required:true
                      }
        }
        ```
    -   response:
        ```json
        {
          result:[
            [Number, Number],
            [Number, Number],
            .
            .
            .
          ]
        }
        ```

-   http://localhost:3000/api/[roomcode]/review [**GET**]

    -   description: get the entry of all users
    -   params:
        ```js
        {
          "roomcode":{
                        type:string,
                        required:true
                      }
        }
        ```
    -   response:
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

-   http://localhost:3000/api/[roomcode]/delete [**DELETE**]

    -   description: delete the people in the roomcode from the DB
    -   params:
        ```js
        {
          "roomcode":{
                        type:string,
                        required:true
                      }
        }
        ```
    -   response:
        ```json
        {
          "string"
        }
        ```
