U = [ 1 0 1 0 1 -1 0 
   0 0 0 0 1 0 1 
   0 1 0 0 0 1 0 
   1 1 0 1 0 0 -1];
V = [ 1 1 0 -1 0 1 0 
   0 0 1 0 0 1 0 
   0 0 0 1 0 0 1 
   1 0 -1 0 1 0 1];
P = zeros(4,4);
for i = 1:6
 	P = cat(3, P, zeros(4,4) ); 
end
for i = 1:7
	P(:,:, i ) = U(:,i)*V(:,i)';
end
P(:,:,1) + P(:, :, 4) - P(:,:,5) + P(:,:,7);
