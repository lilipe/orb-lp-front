module.exports = function (grunt) {

    // Impede que os replaces alterem a codificação das páginas
    grunt.file.preserveBOM = true;

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            script : [
                'assets/styles/**/*',
            ],style : [
                'assets/scripts/**/*',
            ],font : [
                'assets/fonts/**/*',
            ]
        },

        copy: {
            padrao: {
                files: [{
                    expand: true,
                    cwd: 'bower_components/bootstrap/fonts',
                    src: ['**'],
                    dest: 'assets/fonts'
                },{
                    expand: true,
                    cwd: 'bower_components/font-awesome/fonts',
                    src: ['**'],
                    dest: 'assets/fonts'
                },{
                    expand: true,
                    cwd: 'bower_components/font-awesome/css',
                    src: ['**'],
                    dest: 'assets/styles'
                },{
                    src: 'bower_components/bootstrap/dist/js/bootstrap.js',
                    dest: 'assets/scripts/bootstrap.js'
                },{
                    src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    dest: 'assets/scripts/bootstrap.min.js'
                },{
                    src: 'bower_components/angular/angular.js',
                    dest: 'assets/scripts/angular.js'
                },{
                    src: 'bower_components/angular/angular.min.js',
                    dest: 'assets/scripts/angular.min.js'
                },{
                    src: 'bower_components/jquery/dist/jquery.js',
                    dest: 'assets/scripts/jquery.js'
                },{
                    src: 'bower_components/jquery/dist/jquery.min.js',
                    dest: 'assets/scripts/jquery.min.js'
                },{
                    src: 'bower_components/jquery/dist/jquery.min.map',
                    dest: 'assets/scripts/jquery.min.map'
                },{
                    src: 'bower_components/angular/angular.min.js.map',
                    dest: 'assets/scripts/angular.min.js.map'
                },{
                    src: 'bower_components/bootstrap/dist/css/bootstrap.css',
                    dest: 'assets/styles/bootstrap.css'
                },{
                    src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    dest: 'assets/styles/bootstrap.min.css'
                },{
                    src: 'bower_components/bootstrap/dist/css/bootstrap.min.css.map',
                    dest: 'assets/styles/bootstrap.min.css.map'
                }]
            }
        },

        sass: {
            padrao: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['**/*.scss'],
                    dest: 'assets/styles/',
                    ext: '.css'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', [
        'clean',
        'copy'
    ]);

};