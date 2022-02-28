﻿namespace findDivisors
{
    public class Program
    {
        public static void Main()
        {
            /***
                The sequence of triangle numbers is generated by adding the natural numbers. 
                So the7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.The first ten terms would be:
                1, 3, 6, 10, 15, 21, 28,36, 45, 55, ...
                Let us list the factors of the first seven triangle numbers:
                1: 1
                3: 1,3
                6: 1,2,3,6
                10: 1,2,5,10
                15: 1,3,5,15
                21: 1,3,7,21
                28: 1,2,4,7,14,28
                We can see that 28 is the first triangle number to have over five divisors.
                What is the value of the first triangle number to have over five hundred divisors?
             * **/
            int divisorNum = 500;  // value's divisor should over this amount
            Console.WriteLine($"The value of the first triange number " +
                $"to have over five hundred divisors is {findDivisors(divisorNum)}");
        }

        private static int findDivisors(int divisorNum)
        {
            int divisor=1;
            int n = 2;
            Dictionary<int,int> primes;
            int triNum = 0;
            while (divisor <= divisorNum)
            {
                primes = new();
                divisor = 1;
                triNum = n * (n + 1) / 2;  // calculate 1+n
                Console.WriteLine("triangle number = "+triNum);
                if (FindPrime(triNum))
                {
                    n++;
                    continue;
                }
                int quotient = triNum;
                int prime = 2;
                while (!FindPrime(quotient))
                {
                    if (FindPrime(prime))
                    {
                        if (quotient % prime == 0)
                        {
                            quotient = quotient / prime;
                            Console.WriteLine("divisor = " + prime);
                            if (primes.ContainsKey(prime))
                            {
                                primes[prime]++;
                            }
                            else
                            {
                                primes.Add(prime, 1);
                            }
                        }
                        
                    }
                    if (quotient <= prime)
                    {
                        prime = 2;
                    }
                    else
                    {
                        prime++;
                    }
                }
                Console.WriteLine("quotient = " + quotient);
                if (primes.ContainsKey(quotient))
                {
                    primes[quotient]++;
                }
                else
                {
                    primes.Add(quotient, 1);
                }

                foreach(int i in primes.Values)
                {
                    divisor *= (i + 1);
                }
                Console.WriteLine("Num of divisors = " + divisor);
                n++;
            }
            return triNum;
        }

        public static bool FindPrime(int number)
        {
            if (number == 1) return false;
            if (number == 2) return true;
            if (number % 2 == 0) return false;
            var squareRoot = (int)Math.Floor(Math.Sqrt(number));
            for (int i = 3; i <= squareRoot; i += 2)
            {
                if (number % i == 0) return false;
            }
            return true;
        }
    }
}