#!/usr/bin/perl

$y= -100;
while ( $y < 101 ){
		printf("0	$y	$y	#x1 \n");
	$y = $y + 0.05;
}


$y= -100;
while ( $y < 101 ){
		printf("$y	1	1	#x2 \n");
	$y = $y + 0.05;
}

$y= -100;
while ( $y < 101 ){
		printf("$y 	0	$y	#y1 \n");
	$y = $y + 0.05;
}

$y= -100;
while ( $y < 101 ){
		printf("1 	$y	1	#y2 \n");
	$y = $y + 0.05;
}
