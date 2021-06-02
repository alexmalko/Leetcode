def buy_and_sell_stock_once(prices):
    min_price_so_far = 0
    max_profit = 0
    for price in prices:
        max_profit_sell_today = price - min_price_so_far
        max_profit = max(max_profit, max_profit_sell_today)
        min_price_so_far = min(min_price_so_far, price)
    return max_profit


print(buy_and_sell_stock_once([7, 1, 10]))
