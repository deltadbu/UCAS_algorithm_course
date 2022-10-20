# UCAS CS091M4041H: Algorithm Design and Analysis -- Fall 2022

## Course information 

- **Instructor:** Dongbo Bu 
   
   - Email: dbu @ ict.ac.cn 
   
   - Office: Room 844, ICT building 
   
   - Phone: 010-62600844 
   
- **TAs:** Milong Ren, Shizhe Ding, Tiansu Gong, Boyang Xia, Ruizhi Liu, Jingyan Sui, Xinru Zhang, Yihui Ren, Kun Wang, Jianquan Zhao, Xinglong Wang
   
   - Email: TAGC @ ict.ac.cn 
   
   - Location: 817, ICT building 
   
   - Office hours: 3:00-6:00, Wednesday 
   
- **Textbooks** (recommended, not required):
  - T.H. Cormen, C.E. Leiserson, R. Rivest, and C. Stein, Introduction to algorithms (2nd ed.), MIT Press, 2001. Widely available.
  - J. Kleinberg and E. Tardos, Algorithm Design. Addison-Wesley, 2005.
  - R. Motwani and P. Raghavan, Randomized Algorithms. Cambridge U. Press, 1995

- **Other reading material:**
  - Christos H. Papadimitriou, Kenneth Steiglitz, Kenneth Steiglitz. Combinatorial Optimization: Algorithms And Complexity. Courier Dover Publications, 1998
  - Ding-Zhu Du, Ker-I Ko, Xiaodong Hu. Design and analysis of approximation algorithms. Springer, 2012
  - Daming Zhu, Shaohan Ma. Algorithm design and analysis. High Education Press, 2009.
  - Udi Manber, Introduction to Algorithms: A Creative Approach.
  - M. Mitzenmacher and E. Upfal, Probability and Computer. Cambridge U. Press, 2005.
  - M. R. Garey and D. S. Johnson. Computers and Intractability: A Guide to the Theory of NP-Completeness. W.H. Freeman, New York, 1979.

- **Prerequisites:**
    We will assume knowledge of:
   - Basic data structures such as lists, trees, heaps, sorting and searching;
   - Basic discrete mathematics such as proofs by mathematical induction;
   - Computability and programming experience.

## Topics:

We will cover the following topics if time permits:
   - Problem hardness, NP-completeness;
   - Algorithm analysis techniques, including worst-case and average-case, amortized, randomization, and competitive;
   - Basic algorithm techniques, including greedy, iteration, divide-and-conquer, dynamic programming, network flow, linear programming;
   - Algorithm techniques for hard problems, including approximation algorithms, local search, primal-dual algorithms, linear programming;
   - Randomized algorithms: basic techniques from discrete probability, and applications to optimization.
   - Specific problems from computational biology and Bioinformatics (if time permits).

## Grading policies

   8 assignments and final examination.
   
## Weekly Schedule
The week number is an active link -- each week has its own page that includes required reading, recommended reading, assignment (if any), teaching assistants, etc. Topics for weeks beyond the current and next are always tentative.

- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Topic 2:** Divide-and-conquer technique, and the combination with randomization;

      Slides: [Lec5.pdf](Lectures/Lec5.pdf), [Lec5-FFT.pdf](Lectures/Lec5-FFT.pdf), [demo merge (by K. Wayne)](Lectures/Lec5-demo-merge.ppt), 
[demo of QuickSort partition (by Y. Danial Liang)](http://www.cs.armstrong.edu/liang/animation/web/QuickSortPartition.html)

   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)
      - [College Admissions and the Stability of Marriage (by Gale and Shapley, 1962)](Lectures/Lec1-Stable-Matching-Gale-Shapley1962.pdf)
      - [STABLE ALLOCATIONS AND THE PRACTICE OF MARKET DESIGN (compiled by the Economic Sciences Prize Committee of the Royal Swedish Academy of Sciences, 2012)](http://www.nobelprize.org/nobel_prizes/economics/laureates/2012/advanced-economicsciences2012.pdf)
      - [Stable matching: Theory, evidence, and practical design (INFORMATION FOR THE PUBLIC, The Nobel prize in economic sciences, 2012)](http://www.nobelprize.org/nobel_prizes/economics/laureates/2012/popular-economicsciences2012.pdf)
      - [Who is Interested in Algorithms and Why? Lessons from the Stony Brook Algorithms Repository (by Steven S. Skiena, 1999)](Lectures/Lec1-Who-Is-Interested-in-Algorithms-Skiena1999.pdf)
      - [An Effective Heuristic Algorithm for the Traveling-Salesman Problem (by S. Lin and B. W. Kernighan, 1971)](Lectures/Lec1-TSP-Lin-Kernighan1971.pdf)
      - [Gene coexpression measures in large heterogeneous samples using count statistics (by Y. Wang, M. S. Waterman, and H. Huang, 2014)](Lectures/Lec5-Huang-Inverse-Order-PNAS2014.pdf)
      - [Duality applied to the complexity of matrix multiplications and other bilinear forms (by J. Hopcroft, and J. Musinski, 1973)](Lectures/Lec5-Matrix-Multiplication-Duality-Hopcroft1973.pdf)
      - [The Coppersmith-Winograd matrix multiplication algorithm (by M. Anderson and S. Barman, 2009)](Lectures/Lec5-Matrix-Multiplication-Coppersmith-Winograd-by-Anderson-Barman2009.pdf)
      - [Some techniques for solving recurrences  (by George S. Lueker, 1980)](Lectures/Lec5-solving-recurrence-Lueker1980.pdf)
      - [Karatsuba algorithm vs. grade-school method: experimental results (picture)](Lectures/Karastubavsgschoolv2.png)
      - [Karatsuba algorithm vs. grade-school method: experimental results (a summary)](https://introtcs.org/public/lec_01_introduction.html)
      - [Fast Division of Large Integers --- A comparison of Algorithms (by Karl Hasselstrom, 2003)](Lectures/Lec5-Fast-Division-Hasselstrom2003.pdf)
      - [Quicksort (by C. A. R. Hoare, 1962)](Lectures/Lec5-QuickSort-Hoare1962.pdf)
      - [Time bounds for selection  (by Manual Blum, Robert W. Floyd, Vaughan Pratt, Ronald Rivest, and Robert E. Tarjan, 1973)](Lectures/Lec5-Selection-Floyd-Rivest-1973.pdf)
      - [Expected time bounds for selection  (by Robert W. Floyd, Ronald L. Rivest, 1973)](Lectures/Lec5-Selection-Floyd-Rivest-1973.pdf)
      - [Ph. D. thesis of Michael Ian Shamos (Section 6.2: Closest-Point Problems)](Lectures/Lec5-Closest-Pair-ShamosThesis1978.pdf)
      - [Finding and counting given length cycles (by Noga Alon, Raphael Yuster, and Uri Zwick, 1994)](Lectures/Lec5-Counting-Cycles-in-Graph-Alon1994.pdf) 
      - [Closest Pair Data Structure: Applications (by David Eppstein)](http://www.ics.uci.edu/~eppstein/projects/pairs/Applications/)
      - [Dynamic Euclidean Minimum Spanning Trees and Extrema of Binary Functions (by David Eppstein, 1995)](Lectures/Lec5-Dynamic-Minimum-Spanning-Tree-Eppstein1995.pdf)
      - [Fast Hierarchical Clustering and Other Applications of Dynamic Closest Pairs (by David Eppstein, 1998)](Lectures/Lec5-Dynamic-Closest-Pairs-Eppstein1998.pdf)
      - [Fourier analysis (by Cleve Moler)](Lectures/Lec5-FFT-Moler2008.pdf)
      - [A general method for solving divide-and-conquer recurrences (by J. L. Bentley, D. Haken, J. B. Saxe, 1980)](Lectures/Lec5-Master-Theorem-Bentley1980.pdf)
      - [The complexity of computations (by A. A. Karatsuba, 1995)](Lectures/Lec5-Fast-Multiplication-Karatsuba1995.pdf)
      - [Sorting and selection on dynamic data (by Aris Anagnostopoulos, et al, 2011)](Lectures/Lec5-Dynamic-Sorting-and-Selection-Upfal2011.pdf)
      - [Gaussian elimination is not optimal (by V. Strassen, 1969)](Lectures/Lec5-Matrix-Multiplication-Strassen1969.pdf)
      - [Matrix multiplication via arithmetic progressions (by Don Coppersmith, Shmuel Winograd, 1990)](Lectures/Lec5-Matrix-Multiplication-Coppersmith-Winograd1990.pdf)


- **Week 3, 4, 5: More on basic algorithm design techniques**
   - **Topic 1:** Dynamic programming technique
   
      Slides: [Lec6.pdf](Lectures/Lec6.pdf), [Lec6-HMM.pdf](Lectures/Lec6-HMM.pdf),   [Lec6-RNA.ppt](Lectures/Lec6-RNA.ppt) 

   - **Topic 2:** Advanced dynamic programming 
   
      Slides: [Lec6-NNTSP-Feidiao2018.pptx](Lectures/Lec6-NNTSP-Feidiao2018.pptx) 

   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)

- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)


- **Week 1,2,3: Introduction to algorithm and basic design techniques**
   - **Topic 1:** Introduction to algorithm: some representative problems
   
      Slides: [Lec1.pdf](Lectures/Lec1.pdf) 
      
   - **Reading material:**
      - Chapter 1 of Algorithm design,
      - Chapter 17 of Introduction to Algorithms,
      - Lecture 8, 9 of The Design and Analysis of Algorithms
      - [On the solution of linear recurrence equations (by Mohamad Akra and Louay Bazzi, 1998)](Lectures/Lec1-LinearRecurrenceEquations-Bazzi1998.pdf)

