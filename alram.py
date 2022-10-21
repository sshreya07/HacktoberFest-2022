from datetime import datetime   
from playsound import playsound
#m=minutes
#s=seconds
#h=hours
#p=period
alarm_t = input("Enter the time of alarm to be set:HH:MM:SS\n")
alarm_h=alarm_t[0:2]
alarm_m=alarm_t[3:5]
alarm_s=alarm_t[6:8]
alarm_p = alarm_t[9:11].upper()
print("Setting up alarm..")
while True:
    now = datetime.now()
    current_h = now.strftime("%I")
    current_m = now.strftime("%M")
    current_s = now.strftime("%S")
    current_p = now.strftime("%p")
    if(alarm_p==current_p):
        if(alarm_h==current_h):
            if(alarm_m==current_m):
                if(alarm_seconds==current_s):
                    print("Wake Up!")
                    playsound('audio.mp3')
                    break
