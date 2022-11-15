# Team BigBull
## Problem Statement - Asset Bubble 
## About Data 
The data were acquired from different open source links on the internet but most of them were retrieved from YahooFinance.
## Feature extraction 
* Time - It is the time stamp of the price

* Unemployment data - The Employment Situation report is typically released on the third Friday after the conclusion of the reference week, i.e., the week which includes the 12th of the month. (Every Month)

* CPI(consumer price index) - Currently, the consumer price index (CPI) is calculated by considering 299 items. The formula for calculating the CPI index is: (Cost of a fixed basket of goods and services in the current year/cost of a fixed basket of goods and services in the base year) * 100. (Released every month)

* P/E(Price to Earning Ratio) - The ratio is used for valuing companies and for finding out whether they are overvalued or undervalued.

* Open - The opening price of the price for the particular time frame  

* High - It is the highest price of the index in the particular time frame

* Low - It is the lowest price of the index in the particular time frame

* Close - It is the Closing price(The price at which the day or particular timeframe ended).
The industrial production index (IPI) - IPI measures levels of production and capacity in the manufacturing, mining, electric, and gas industries, relative to a base year. The Federal Reserve Board (FRB) publishes the IPI in the middle of every month, and revisions to previous estimates at the end of every March.

* Treasury - Market Yield on U.S. Treasury Securities at 10-Year Constant Maturity, Quoted on an Investment Basis. (updated on the 11th business day of each month.)

## Reasoning for labeling data
Initially we labelled the major crashes on S&p 500 chart then we corelated the crashes phase with different ecomic data such as CPI, Unemployment, EPS trend etc. Then we found the corelation between crash phases and those economic datas. We filtered out the data which were correlating before the crash and during the crash and eliminated all other data which were later factored after the crash.We marked all the major crash phase with “1” and trained the model with all same economic data to predict the future probability of crash.

## Approach to solve
Firstly forecasted the values for S&B 500 for a period of 24 months using ARIMA and SARIMAX models.This was used to better evaluate the predicted data and carry out , economical analysis on the the time period of prediction of crash.
A binary classifier classifying as crash or not with an 11 features input was created using several Machine Learning algorithms out of which random forests and decisison trees performed the best.A deep learning model was trained using Keras to give and accuracy of 87% using CNNs and 82% using DNNs.Machine learning models like random forests gave an accuracy of 94%. The precission , recall and F1-Score was judged and the best keras model was deployed using Tensorflow JS.
Along with this the Twitter API has been used to fetch tweets regardings stocks in realtime in order to analyse the current stock data.Used Alpha Vantage API to display the  market sentiments using articles and give information about the barish and bullish nature of important individuals.

## About model 
ARIMA and SARIMAX models were used to forecast the values for next 2 years by identifying the stationary and non-stationary features in the data.ARIMA stands for auto regressive integrated moving average. SARIMAX is similar and stands for seasonal auto regressive integrated moving average with exogenous factors.CNN model was used with the following architecture to classify if the crash will occur or not. The CNN model has 512 nodes in the first Conv1D layer followed by dropout of 0.2 , the second layer with 256 nodes and dropout , third layer and fourth layer with 128 nodes each and 0.2 dropout.The Relu activation function was used in all these layers.Finally 1 dense layer with Sigmoid Activation function to perform binary classification. The model was compiled with 'adam' optimizer and loss was taken as 'binary crossentropy'.

## UI/UX
![Landing](https://github.com/iamneo-production/4406b380-4ee6-4320-955b-eb9e6e2f0f44/blob/main/Images/landing.jpeg)

![Tweets](https://github.com/iamneo-production/4406b380-4ee6-4320-955b-eb9e6e2f0f44/blob/main/Images/tweets.jpeg)

![Model](https://github.com/iamneo-production/4406b380-4ee6-4320-955b-eb9e6e2f0f44/blob/main/Images/predict.jpeg)

![Plots](https://github.com/iamneo-production/4406b380-4ee6-4320-955b-eb9e6e2f0f44/blob/main/Images/plots.jpeg)


## Technology Stack 💻
* REACT 
* NODE JS
* EXPRESS JS
* TENSORFLOW -KERAS
* TENSORFLOW JS
* AWS
* MONGO DB
* REDUX
* BYCRYPT , JWT VALIDATION
* SCIKIT-LEARN
* NUMPY 
* PANDAS
* TWITTER API V2
* PYTHON 
* TYPESCRIPT

## Collaborators 🤖
| Name      | GitHub Profile     |
| :------------- | :----------: |
|  Sreyom Sreesan Nayak  | [GitHub](https://github.com/sreyom31) |
|  Abhay Lal (Team Lead) | [GitHub](https://github.com/abhay-lal) |
|  Pulkit M| [GitHub]( https://github.com/Pulkit1802) |


