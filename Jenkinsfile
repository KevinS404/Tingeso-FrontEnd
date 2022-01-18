pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('SonarQube analysis'){
            steps {
                dir("/var/lib/jenkins/workspace/front/frontend"){
                    sh 'rm -rf .scannerwork'
                    sh 'npm install'
                    withSonarQubeEnv('sonarqube'){
                        sh 'npm run sonarqube'
                    }
                }
            }
        }
        /*
        stage('Build-frontend'){
            steps{
                echo "entre a Build-frontend"
                dir("/var/lib/jenkins/workspace/Mingeso/Evaluacion2") {
                    sh "docker build . -t frontimage"
                    sh "docker tag frontimage belenrickmers/front3"
                    script {
                        //front-image = docker.build registry1
                        docker.withRegistry( '', registryCredential ) {
                        //frontimage.push()
                        sh "docker push belenrickmers/front3"
                        }
                    }
                echo "voy a salir de Build-frontend"
                }
            }
        }
        */
    }
}