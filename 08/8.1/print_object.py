# coding: utf-8
#########################################################################
# 网站: <a href="http://www.crazyit.org">疯狂Java联盟</a>               #
# author yeeku.H.lee kongyeeku@163.com                                  #
#                                                                       #
# version 1.0                                                           #
#                                                                       #
# Copyright (C), 2001-2018, yeeku.H.Lee                                 #
#                                                                       #
# This program is protected by copyright laws.                          #
#                                                                       #
# Program Name:                                                         #
#                                                                       #
# <br>Date:                                                             #
#########################################################################
class Item:
    def __init__ (self, name, price):
        self.name = name
        self.price = price
# 创建一个Item对象，将之赋给im变量
im = Item('鼠标', 29.8)
# 打印im所引用的Item对象
print(im)
print(im.__repr__())

im_str = im.__repr__() + ""
print(im_str)