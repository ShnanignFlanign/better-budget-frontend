# better-budget-frontend

>Link: http://better-budget.herokuapp.com

Better Budget is a personal finance management web application. Upon creating a profile, a user can create models that represent their personal bank accounts. Each bank account can display their transaction history by date, and separate between deposits and other withdrawals. Full CRUD functionality applies to all user bank accounts and transaction models, for ease of use and modularity. 

With a React front end and a Flask/Python back end, this application utilizes PostgreSQL's relational database management system to display user account and transaction history in a neat and organized manner.

## User Stories

> - As a user, I want to create my own profile to access my bank accounts.
> - As a user, I want to see all of my accounts upon login.
> - As a user, I want to click on a specific account and pull up its transaction history.
> - As a user, I want to categorize my account expenses and be able to see them clearly.
> - As a user, I want to edit/delete an account or transaction in case I made an error.

## Wireframes
<img width="1218" alt="Screenshot 2022-11-02 at 5 50 48 PM" src="https://user-images.githubusercontent.com/104398805/204670151-5cdd0e8f-9d7d-4463-bfa1-b080afa57007.png">


## ERD
<img width="843" alt="Screenshot 2022-11-02 at 5 19 21 PM" src="https://user-images.githubusercontent.com/104398805/204670135-494b3d42-3f55-4337-ac91-c11f78a54d20.png">

## For The Future
> Currently, there is no way for a user to recover their password or change anything about their profile information. Though this application does not synchronize any actual bank account information from users, I believe this functionality would make users feel more comfortable using Better Budget.
> Additionally, organization by expense category accompanied by graphical representations of spending by category would provide helpful visual aids for those interacting with their Better Budget accounts. 
> Finally, implementing some sort of expense constraint by category would also give users a helpful tool for budget management within this application.

## Known Issues 
> Currently, Cross-Origin Access errors are present when using the application on Safari. As one of the primary potential use cases for this application would be on one's mobile device, this is a glaring issue that needs resolution for the future.
