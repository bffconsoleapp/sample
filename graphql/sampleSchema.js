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
#