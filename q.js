// Prompts
// # 1 logged in user and following
//
// # 2 view repositoryOwner and their repos
// 	# (pass in user)
// 	# cursor, pagination

// 1

query {
  viewer {
    login
  }
}

// 2

query($login:String!) {
  repositoryOwner(login:$login) {
    repositories(last:30) {
      edges {
        cursor
        node {
          name
        }
      }
    }
  }
}



// 3

{
  viewer {
    organizations(first: 1) {
      edges {
        node {
          repositories(last: 10) {
            edges {
              node {
                name
                pullRequests(last: 10) {
                  edges {
                    node {
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// curl -XPOST -H 'Content-Type:application/graphql' -d 'query Query { veggies(field: "color", value: "red") { id, name, color } }'  http://localhost:8080/graphql
