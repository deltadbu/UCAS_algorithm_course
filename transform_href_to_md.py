from sys import * 

if len( argv ) == 1:
    print("Usage: %s href.txt" % (argv[0]) );
    exit();

with open(argv[1], "r") as fp:
    for line in fp:
        line = line.strip();
        if line[0:4] == "<li>":
            line = line[4:-1];
            line = line.strip();
        
        a = line.split("<");

        b = a[1].split(">");

        c = b[0].split("\"");
        name = b[1].strip(); 

        if len(c) < 2:
            print("error!");
            print(c);
            exit(-1);

        href=c[1];
        if href[0:14] == "http://bioinfo" : 
            h = href.split("/");
            href = h[-1];
            print("[%s](Lectures/%s)" % (name, href) );
        else:
            print("[%s](%s)" % (name, href) );

        
