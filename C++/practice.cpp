#include <iostream>
using namespace std;
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
// #include <iostream>
// using namespace std;

// int main(){
//     // 1-method 
//     // int a[5] = {3, 5, 54, 32, 5};
//     // 2- method
//     // int a[] = {3, 5, 45, 2, 65};
//     // 3-method 
//     // int a[5] = {0};
//     //sizeof(int, float, char, bool)
//     // float arr; 
//     // cout<<sizeof(arr)<<" "<<endl;

//     int a[5] = {3, 4, 5, 6, 9};
//     cout<<sizeof(a)/sizeof(a[0])<<endl;
//     // for(int i=0; i<5; i++)
//     // cout<<a[i]<<" ";
//     return 0;
// }


// // find minimum value of this arr ?
// #include <iostream>
// #include <limits.h>
// using namespace std;
// int main(){
//     int arr[5] = {3, 5, 8, 9, 10};
//     int min = INT_MAX;
//     for(int i=0; i<5; i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     cout<<min<<endl;

// //maximum value of arr 
//     int max = INT_MIN;
//     for(int i=0; i<5; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     cout<<max<<endl; 
//     return 0;
// }


// // sum of n 
// #include <iostream>
// using namespace std; 
// int main(){
//     int n;
//     cin>>n;
//     int arr[n] = {};
//     for(int i=0; i<n; i++){
//         cin>>arr[i];
//     }
//     int sum = 0;
//     for(int i=0; i<n; i++){
//         sum += arr[i];
//     }
//     cout << sum << endl;
//     return 0;

// }

// // Calculate the product of all the elements in the given array.

// int main(){
//     int arr[] = {4, 6, 3, 6, 9};
//     int prod = 1; 
//     int n = sizeof(arr)/sizeof(arr[0]);
//     for(int i=0; i<n; i++){
//         prod *= arr[i];
//     }
//     cout<<prod<<endl;
// }

//Linear Search 
// // Q1. Find the element x in the array. Take array and x as input.

// int main(){
//     int arr[5] = {4, 6, 3, 0, 9};
//     int target;
//     cout<<"Enter Target : ";
//     cin>>target; 
//     bool flag = false;
//     for(int i=0; i<5; i++){
//         if(arr[i] == target){
//             flag = true;
//             break; 
//         }
//     }
//     if(flag == true) cout<<target<<" is present"<<endl;
//     else cout<<target<<" is not present"<<endl;
// }

// Q. find the second largest element in the given array.
