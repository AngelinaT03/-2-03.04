Console.WriteLine("Введите признак");
            char c = Console.ReadLine().ToCharArray()[0];
 
            switch (c)
            {
                case 'а':
                    Console.WriteLine("1019,467 км/ч");
                    break;
                case 'в':
                    Console.WriteLine("268 км/ч");
                    break;
                case 'м':
                    Console.WriteLine("518,45 км/ч");
                    break;
                case 'с':
                    Console.WriteLine("3529,56 км/ч");
                    break;
                case 'п':
                    Console.WriteLine("9851 км/ч");
                    break;
                default:
                    Console.WriteLine("Вы ввели неправильну букву");
                    break;                    
            }