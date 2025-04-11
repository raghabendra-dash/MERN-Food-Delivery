## TOMATO - Food Delivery Website

   This repository hosts the source code for TOMATO, a dynamic food ordering website built with the MERN Stack. It offers a user-friendly platform for seamless online food ordering by utilizing local storage for managing user sessions and URL search parameters for handling payment verification and order tracking.There is an Admin panel in which admin user can add food items or remove food items on Tomato website. User also check the status of their food in MyOrders page. Clicking on the cart item will be redirected user to Stripe payment page.

### Demo

- User Panel: [Click Here](https://food-delivery-website-hazel.vercel.app/)
  <!--(https://food-delivery-website-gamma.vercel.app/)-->
  <!--(https://mern-food-delivery-frontend.vercel.app/)-->
- Admin Panel: [Click Here](https://food-delivery-website-admin.vercel.app/)
  <!--(https://mern-food-delivery-admin-421q.onrender.com/)-->
- Backend Url: [Click](https://food-delivery-website-v9oh.onrender.com)

### Features

- User Panel
- Admin Panel
- Password Hashing with Bcrypt
- Stripe Payment Integration
- Login/Signup
- Logout
- Add to Cart
- Place Order
- Order Management
- Products Management


### Run Locally

Clone the project

```bash
    git clone 
```
Go to the project directory

```bash
    cd Food-Delivery
```
Install dependencies (frontend)

```bash
    cd frontend
    npm install
```
Install dependencies (admin)

```bash
    cd admin
    npm install
```
Install dependencies (backend)

```bash
    cd backend
    npm install
```
Install dependencies (root)

```bash
    cd ..
    npm run install-all 
```

Setup Environment Vaiables

```Make .env file in "backend" folder and store environment Variables
  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=YOUR_SALT_VALUE
  MONGO_URL=YOUR_DATABASE_URL
  STRIPE_SECRET_KEY=YOUR_KEY
 ```

Setup the Frontend and Backend URL
   - App.jsx in Admin folder
      const url = YOUR_BACKEND_URL
     
  - StoreContext.js in Frontend folder
      const url = YOUR_BACKEND_URL

  - orderController in Backend folder
      const frontend_url = YOUR_FRONTEND_URL 

Start the Backend server

```bash
    nodemon server.js
```

Start the Frontend server

```bash
    npm start
```

Start the Backend server

```bash
    npm start
```

Start all concurrently

```bash
    npm run start
```

### Tech Stack
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
* [Stripe](https://stripe.com/)
* [JWT-Authentication](https://jwt.io/introduction)
* [FreePik](https://www.freepik.com/)

### Deployment

The application is deployed on Vercel and Render.


### Feedback

If you have any feedback, please reach out to me [here](https://www.linkedin.com/in/raghabendra779)
