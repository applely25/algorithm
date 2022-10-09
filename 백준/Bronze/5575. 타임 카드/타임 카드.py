for i in range(3):
    sh, sm, ss, fh, fm, fs = map(int, input().split())
    t1 = sh * 3600 + sm * 60 + ss
    t2 = fh * 3600 + fm * 60 + fs
    t = t2 - t1
    print(t//3600, t//60 - (t//3600)*60, t%60 )