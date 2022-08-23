#!/usr/bin/perl

$T="OCURRANCE";
$S="OCCURRENCE";

@last_line={};

for( $j = 0; $j < length($T)+1; $j++) {
	$last_line[$j] = -3*$j;
	printf(" $last_line[$j] ");
}
printf("\n");

for( $i = 1; $i < length($S)+1; $i++) {
	for( $j = 0; $j < length($T)+1; $j++ ){
		if( $j ==  0 ) {
			$line[ $j ] = -3*$i;
		}else{
			$si = substr( $S, $i-1, 1);
			$tj = substr( $T, $j-1, 1);
			if( $si eq $tj ){
				$max = $last_line[ $j-1 ] + 1;
			}else{
				$max = $last_line[ $j-1 ] - 1;
			}
			if( $last_line[$j] - 3 > $max ){
				$max = $last_line[$j] - 3;
			}
			if( $line[ $j-1 ] - 3 > $max ) {
				$max = $line[$j-1] -3 ;
			}
			$line[ $j ] = $max;
		}
		printf(" $line[$j] ");
	}
	printf("\n");
	for( $j = 0; $j < length($T)+1; $j++ ){
		$last_line[ $j ] = $line[ $j ];
	}
}
