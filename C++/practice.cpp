// #include <iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"Please enter numbers : ";
//     cin>>n;
//     for(int i=0; i<n; i++){
//         for(int j=0; j<n; j++){
//             cout<<"* ";
//         }
//         cout<<endl;
//     }
//     return 0;
// }

// =====================>>>> Array  <<<<======================
#include <iostream>
using namespace std;

int main(){
    // 1-method 
    // int a[5] = {3, 5, 54, 32, 5};
    // 2- method
    // int a[] = {3, 5, 45, 2, 65};
    // 3-method 
    // int a[5] = {0};
    //sizeof(int, float, char, bool)
    // float arr; 
    // cout<<sizeof(arr)<<" "<<endl;

    int a[5] = {3, 4, 5, 6, 9};
    cout<<sizeof(a)/sizeof(a[0])<<endl;
    // for(int i=0; i<5; i++)
    // cout<<a[i]<<" ";
    return 0;
}