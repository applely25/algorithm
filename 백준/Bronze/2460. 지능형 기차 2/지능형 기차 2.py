ridePeople = 0  # 현재 타고 있는 인원
maxPeople = 0   # 타고 있었던 인원 중 최대 인원수

for i in range(10):  # 10정거장을 들림
  down, up = map(int, input().split())  # 내린 사람 수와 탄 사람 수 입력받기
  ridePeople += up-down  # 현재 타고 있는 인원 계산
  maxPeople = max(maxPeople, ridePeople)  # 타고 있는 인원 max 값 구하기

print(maxPeople)  # 결과값 출력