
import matplotlib.pyplot as plt
import serial
import time
import pandas as pd

# 시리얼 포트와 보드레이트를 설정합니다.
port = '/dev/cu.usbmodem101'  # 자신의 포트로 변경하세요.
baudrate = 115200

# 시리얼 포트를 엽니다.
try:
    ser = serial.Serial(port, baudrate)
    print("보드 연결 성공!")
except serial.SerialException as e:
    print(f"보드 연결 실패: {e}")
    exit()

# 초기 데이터 설정
DataBpm = []

# 심박수 데이터를 읽고 출력하는 함수
def read_bpm():
    try:
        while True:
            with open('data.txt','w') as file_data:
                file_data.write("")
            for i in range(300):
                if ser.in_waiting > 0:
                    bpm = ser.readline().decode()
                    try:
                        bpm_value = bpm.split(" ")
                        print(f"BPM: {bpm_value[0]}, Co2 {bpm_value[1]} ")
                        with open('data.txt','a') as file_data:
                            file_data.write(f"{bpm_value[0]} {bpm_value[1]}")
                        DataBpm.append([bpm_value, 20])
                    except ValueError:
                        print(f"유효하지 않은 BPM 데이터: {bpm}")
                    
                time.sleep(0.1)  # 100ms 대기
    except KeyboardInterrupt:
        print("프로그램 종료")
    finally:
        ser.close()

# 데이터 읽기 함수 호출
read_bpm()

# DataFrame 생성 및 출력
df = pd.DataFrame(DataBpm, columns=['BPM', 'Co2'])

