```graphql
# codegen-start
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Credit_Union {
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Report: [Premium_Report]
    Premium_Adjustment: [Premium_Adjustment]
    Single_Premium_Certificate_Return: [Single_Premium_Certificate_Return]
  }

  type Premium_Report {
    # Define fields here
  }

  type Premium_Adjustment {
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    # Define fields here
  }

  input PremiumAdjustmentInput {
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Query {
    getCreditUnions: [Credit_Union]
    getPremiumAdjustments: [Premium_Adjustment]
  }

  type Mutation {
    addPremiumAdjustment(input: PremiumAdjustmentInput!): Premium_Adjustment
  }
`;

module.exports = typeDefs;
# codegen-end
```

```javascript
// codegen-start-resolver
const resolvers = {
  Query: {
    getCreditUnions: () => {
      return [
        {
          Contract_Number: "CU123456",
          Credit_Union_Name: "Sample Credit Union",
          Premium_Report: [],
          Premium_Adjustment: [],
          Single_Premium_Certificate_Return: []
        }
      ];
    },
    getPremiumAdjustments: () => {
      return [
        {
          Product_Name: "Loan Protection",
          Report_Period: "Q1 2023",
          Status: "Complete",
          Last_Update: "2023-04-05",
          Period_Ending: "2023-03-31",
          Adjustment_Type_to_the_Credit_Union: "Type A",
          Comment: "Adjustment due to market changes.",
          Total_Borrower_Fees_: 300.0,
          CU_Retail_Rate: 5.0,
          Protected_Loan_Amount: 100000.0,
          Pay_Rate: 2.5,
          Premium_Due: 1500.0,
          Total_Amount: 1800.0
        }
      ];
    }
  },
  Mutation: {
    addPremiumAdjustment: (_, { input }) => {
      // Sample implementation
      const newAdjustment = {
        ...input
      };
      // In actual use case, you'll save the newAdjustment to a database.
      return newAdjustment;
    }
  }
};

module.exports = resolvers;
// codegen-end-resolver
```