function  isPalindrome (str)
    {
        let direct_str = str.toUpperCase().split(" ").join("").split(".").join("")
        let reverse_str = direct_str.split("").reverse("").join("")
        return reverse_str === direct_str 
    }

    console.log('dad - ',isPalindrome('dad'))
    console.log('bad - ',isPalindrome('bad'))
    console.log('123 - ',isPalindrome('123'))
    console.log('121 - ',isPalindrome('121'))
    console.log('.^^. - ',isPalindrome('.^^.'))
    console.log('а Роза упала на лапу Азора - ',isPalindrome('а Роза упала на лапу Азора'))
    console.log('A - ',isPalindrome('A'))
    console.log('space - ',isPalindrome(' '))
    console.log('123abc - ',isPalindrome('123abc'))
    console.log('123ABCcba321 - ',isPalindrome('123ABCcba321'))
    console.log('\' - ',isPalindrome('\''))
    console.log('d.ad - ',isPalindrome('d.ad'))


//punctuation marks - split by every mark 
//exceptional cases - like  console.log('empty - ',isPalindrome()) - need to handle in code
