N=16;
t=0:1/N:1-1/N; 
a = 1*cos(2*pi*1*t) + 1.5*sin(2*pi*2*t); 
Freq=0:N-1
bar(Freq, abs(fft(a)), "r", 0.2);
c = a;
s = a; 
k=3; for i = 0:N-1; c(i+1) = cos( 2*pi/N *k *i); s(i+1) = sin(2*pi/N *k*i ); end; sqrt( (a*c')^2 + (a*s')^2 ); plot(Freq, a, "-*;a;", Freq, c, "-*;cos(2*pi/N*n);", Freq, s, "-*;sin(2*pi/N*n);" ); grid on; axis( [0, 16] ); xlabel("n"); display( sqrt( (a*c')^2 + (a*s')^2 )) ; display(c); display(s);
