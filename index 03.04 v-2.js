using namespace std;
 
 int main() {
 const N=6;
 int arr[N]={1,3,5,9,-1,7};
 int m=0,i=0;
 
 while(i<N){
    if(arr[i]%2!=0){m=arr[i]; break;}
    i++;
 }
 while(i<N){
    if(arr[i]%2!=0 && arr[i]<m)m=arr[i];
    i++;
  }
 m==0 ?  cout<<"no" : cout<<m;
 
 return 0;
}