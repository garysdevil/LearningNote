Dim name,msg  '变量申明
msg="请输入你的名字:" 
Inputbox(msg,"fd","fds") '弹出输入框
Msgbox name    '输出字符串
const PI=3.1415962  REM 申明常量

Mod  '是取余运算


CDbl  '如果你想把字符转换为数字，但又不取整


'判断语句
Dim a 
a=InputBox("dfd") 
a=Int(a)
If a=1 Then  
MsgBox "1" 
Else If a=2 Then 
MsgBox "2"
else 
MsgBox "3" 
End If
End If'
REM 有几个if就有几个end if

dim a 
a=inputbox("输入一个1--3的值") 
a=int(a) '处理inputbox返回字符串的问题 
select case a 
case 1 
msgbox "壹" 
case 2 
msgbox "贰" 
case 3 
msgbox "叁" 
case else 
msgbox "输入错误" 
end select 


REM 循环
Do 
Dim a
Dim  passaa="123" 
a=InputBox("请输入淼淼")
If a=passaa Then
MsgBox "解锁成功"
Exit Do
End If
MsgBox "2解锁"
Loop
