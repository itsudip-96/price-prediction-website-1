import pandas as pd
import numpy as np
from scipy.stats import iqr
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import statsmodels.api as sm
from math import sqrt


def t():
    dfclean = pd.read_csv("bhp.csv")

    dfclean.head()
    y = dfclean['price']
    x = dfclean.drop(columns=['price'])

    xtrain,xtest,ytrain,ytest = train_test_split(x,y,test_size=0.0015)

    global model
    
    model = sm.OLS(ytrain,xtrain).fit()
    print (model.summary())

    pred = model.predict(xtest)
    data = list(zip(ytest,pred))
    comptab = pd.DataFrame(data , columns=['actual','predicted'])
    print (comptab.head())

def get_estimated_price(a,b,c,d):

    testin=[a,b,c,d]
    print (testin)
    p=model.predict(testin)
    print (p)
    return int(p)