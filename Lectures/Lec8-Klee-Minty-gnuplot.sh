echo "0.25 0.0625 0.984375
1 0.25 0.9375
1 0.75 0.8125
0.25 0.9375 0.765625
0.25 0.9375 0.234375
1 0.75 0.1875
1 0.25 0.0625
0.25 0.0625 0.015625 " > Lec8-Klee-Minty.path;
echo "0.25 0.0625 0.015625
0.25 0.0625 0.984375
0.25 0.9375 0.765625
0.25 0.9375 0.234375
0.25 0.0625 0.015625
1 0.25 0.0625
1 0.25 0.9375
1 0.75 0.8125
1 0.75 0.1875
1 0.25 0.0625
1 0.75 0.1875
0.25 0.9375 0.234375
0.25 0.9375 0.765625
1 0.75 0.8125
1 0.25 0.9375
0.25 0.0625 0.984375" > Lec8-Klee-Minty.vertices;
echo 'set grid
splot "Lec8-Klee-Minty.vertices" with linespoints lw 2, "Lec8-Klee-Minty.path" with line lw 2 
pause mouse' > Lec8-Klee-Minty-gnuplot.script
gnuplot < Lec8-Klee-Minty-gnuplot.script
