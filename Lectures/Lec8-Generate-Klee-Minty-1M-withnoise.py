import  random;

n=5000000;
for i in range(n):
	print "var x%d;" %  (i+1);
print "maximize obj: x%d;" %  n;
f4=0.25 + random.random()/float(10^6);
f1=1 + random.random()/float(10^6);
c=1;
print "s.t. c%d: %lf <= x1;" %  (c, f4);
c += 1;
print "s.t. c%d: x1 <= %lf;" % (c, f1);
c += 1;
for i in range(n-1):
	f4=0.25 + random.random()/float(10^6);
	f1=1 + random.random()/float(10^6);
	print "s.t. c%d: %lf * x%d <= x%d;" % (c, f4,  i+1,  i+2);
	c+=1;
	print "s.t. c%d: %lf * x%d + x%d <= %lf;" % (c, f4,  i+1,  i+2,  f1);
	c+=1;
print "solve;";
print "display obj;";
print "end;";
