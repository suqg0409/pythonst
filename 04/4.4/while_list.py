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
src_list = [12, 45, 34,13, 100, 24, 56, 74, 109]
a_list = [] # 定义保存整除3的元素
b_list = [] # 定义保存除以3余1的元素
c_list = [] # 定义保存除以3余2的元素
# 只要src_list还有元素，继续执行循环体
while len(src_list) > 0:
    # 弹出src_list最后一个元素
    ele = src_list.pop()
    # 如果ele % 3等于0（能被3整除）
    if ele % 3 == 0 :
        a_list.append(ele) # 添加元素
    elif ele % 3 == 1:
        b_list.append(ele) # 添加元素
    else:
        c_list.append(ele) # 添加元素
print("整除3:", a_list)
print("除以3余1:",b_list)
print("除以3余2:",c_list)
    
    