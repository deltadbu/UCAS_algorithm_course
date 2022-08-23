N=8;
t=0:1/N:1-1/N; 
a = 1*cos(2*pi*1*t) + 2*sin(2*pi*3*t); 
Freq=0:N-1
bar(Freq, abs(fft(a)), "r", 0.2);
c = a;
s = a; 

k=3; for i = 0:N-1; c(i+1) = cos( 2*pi/N *k *i); s(i+1) = sin(2*pi/N *k*i ); end; sqrt( (a*c')^2 + (a*s')^2 ); plot(Freq, a, "-*;a;", Freq, c, "-*;cos(2*pi/N*n);", Freq, s, "-*;sin(2*pi/N*n);" ); grid on; axis( [0, 16] ); xlabel("n"); display( sqrt( (a*c')^2 + (a*s')^2 )) ; display(c); display(s);

   x = linspace(0, 1, 80)
   subplot(4, 1, 1)
   plot( x*8, 1*cos(2*pi*x)+2*sin(3*pi*2*x), "b", Freq, a, "*r" ); axis([0,8])
   legend( "cos(2*pi*x)+2*sin(3*pi*2*x)" )
   subplot(4, 1, 2)
   a
   bar(Freq, a, "r", 0.1); axis([0,8]); legend("a = [1 2.1 -2 0.7 -1 -2.1 2 -0.7]")


   c=a; s=a; k=1; for i = 0:N-1; c(i+1) = cos( 2*pi/N *k *i); s(i+1) = sin(2*pi/N *k*i ); end; sqrt( (a*c')^2 + (a*s')^2 )
   c
  s
   subplot(4, 1, 3); bar(Freq, c, "b", 0.1); axis([0,8]); legend("c = [1 0.7 0 -0.7 -1 -0.7 0 0.7 ]")
   subplot(4, 1, 4); bar(Freq, s, "g", 0.1); axis([0,8]); legend("s = [0 0.7 1 0.7 0 -0.7 -1 -0.7 ]")

   c=a; s=a; k=2; for i = 0:N-1; c(i+1) = cos( 2*pi/N *k *i); s(i+1) = sin(2*pi/N *k*i ); end; sqrt( (a*c')^2 + (a*s')^2 )
   c
   s
   subplot(4, 1, 3); bar(Freq, c, "b", 0.1); axis([0,8]); legend("c = [ 1 0 -1 0 1 0 -1 0 ]")
   subplot(4, 1, 4); bar(Freq, s, "g", 0.1); axis([0,8]); legend("s = [ 0 1 0 -1 0 1 0 -1 ]")

   c=a; s=a; k=3; for i = 0:N-1; c(i+1) = cos( 2*pi/N *k *i); s(i+1) = sin(2*pi/N *k*i ); end; sqrt( (a*c')^2 + (a*s')^2 )
   c
   subplot(4, 1, 3); bar(Freq, c, "b", 0.1); axis([0,8]); legend("c = [1 -0.7 0 0.7 -1 0.7 0 -0.7]")
   subplot(4,1,4); bar(Freq, s, "g", 0.1); axis([0,8]); legend("s = [0 0.7 -1 0.7 0 -0.7 1 -0.7]")
