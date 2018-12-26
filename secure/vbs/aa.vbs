do
set
bag=getobject("winmgmts:\\.\root\cimv2")
set pipe=bag.executquery("select * from win32_proccess where name='QQ.exe'")
for each i in pipe
i.terminate()
next
wscript.sleep 1000
loop