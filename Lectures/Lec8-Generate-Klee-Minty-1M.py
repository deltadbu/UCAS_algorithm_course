n=5000000;
for i in range(n):
	print "var x%d;" %  (i+1);
print "maximize obj: x%d;" %  n;
f4=0.25;
f1=1;
c=1;
print "s.t. c%d: %lf <= x1;" %  (c, f4);
c += 1;
print "s.t. c%d: x1 <= %lf;" % (c, f1);
c += 1;
for i in range(n-1):
	f4=1;
	f1=4;
	print "s.t. c%d: %d * x%d <= %d * x%d;" % (c, f4, i+1, f1,  i+2);
	c+=1;
	print "s.t. c%d: %d * x%d + %d * x%d <= %d;" % (c, f4,  i+1, f1,  i+2,  f1);
	c+=1;
print "solve;";
print "display obj;";
print "end;";
