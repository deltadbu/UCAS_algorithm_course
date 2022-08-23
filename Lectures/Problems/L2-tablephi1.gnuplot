set grid
plot "svn/dbu/public_html/AlgorithmCourses/Lectures/Problems/L2-tablephi1.data" using 1:2 with lp lw 3  title "Size"
replot "svn/dbu/public_html/AlgorithmCourses/Lectures/Problems/L2-tablephi1.data" using 1:1 with lp lw 3  title "Num"
replot "svn/dbu/public_html/AlgorithmCourses/Lectures/Problems/L2-tablephi1.data" using 1:3 with lp lw 3  title "Phi"
