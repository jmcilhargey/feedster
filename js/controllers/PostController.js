app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: "Calvin Hobbs, Jr.",
        avatar: "https://s3.amazonaws.com/codecademy-content/projects/2/feedster/cbj.svg"
      },
      comment: {
        img: "https://s3.amazonaws.com/codecademy-content/projects/2/feedster/dog.jpg",
        text: "The park is her favorite place in the world! :)"
      }
    },


    {
      author: {
        name: "Cesar Millan",
        avatar: "https://s3.amazonaws.com/codecademy-content/projects/2/feedster/mh.svg"
      },
      comment: {
        img: "http://germanshepherdcentral.net/wp-content/uploads/2014/09/german-shepherd-411613_1280.jpg",
        text: "I'll be out of town next Saturday. Can someone dog-sit Sierra for the day?"
      }
    }
  ]  
}]);