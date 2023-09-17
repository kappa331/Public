import os
import datetime as dt
import pandas_datareader.data as web
import pandas
from pandas_datareader import data as pdr


ticker_symbol='1332'
ticker_symbol_dr = ticker_symbol + ".JP"

start = '2010-01-01'
end = dt.date.today()
end = '2022-07-20'

df = pdr.DataReader(ticker_symbol_dr, data_source='stooq', start=start, end=end)
df.insert(0, 'code', ticker_symbol, allow_duplicates=False)
df.to_csv(os.path.dirname(__file__) + '\s_stock_data_' + ticker_symbol + '.csv')
# d_ohlcv = {'Open': 'first', 'High': 'max', 'Low': 'min', 'Close': 'last', 'Volume': 'sum'}
# print(df)