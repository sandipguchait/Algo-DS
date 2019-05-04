


## RULE 1 = Worst Case
> --> Calculation of the Worst Case first

## RULE 2 = Remove Constants
> --> Remove unecessary constants 

Example -->
> O( 1 + n/2 + 100) --> O(n) --> removing constants

## RULE 3 = Different Terms for inputs 
> --> Functions using Different Inputs should be calculated separately 

## RULE 4 = Drop Non Dominants
> --> Choose the BIG-O which looks more domainaant in the sense that can grow largly 
> as compared to others.
>
> Example: -
> O( n + n^2 ) --> we drop n as n^2 looks more dominant 
