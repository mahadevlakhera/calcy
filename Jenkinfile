pipeline {
    agent {label 'agent-1'}

    stages {
        stage('Clone Repository') {
            steps {
                      cleanWs() 
                  sh  'git clone https://github.com/mahadevlakhera/calcy.git'
                
            }
        }

        stage('Install Dependencies') {
            steps {
                   echo "start running"
                    
                    
                   sh '''
                       cd calcy
                       npm install 
                       npm install mathjs
                       npm run build
                    '''
                      echo "finish "
                    
                
            }
        }

        
    }
}
