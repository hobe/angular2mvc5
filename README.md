# angular2mvc5
Visual Studio 2015 Angular2 Sample with MVC5

Be sure that all NPM Packages (package.json) are restored before building the Solution! Normally the packages should be automatically restored when you first open the solution. If not, right click package.json -> Restore Packages

If you then build the app, the gulp task copies the required node_modules files to "app/libs" folder.


<h2>Description</h2>

Visual Studio compiles TypeScript files for you (not via gulp-task). All you have to do to make MVC5 projects working with angular2 is to add the following TypeScript settings to your .csproj file:
```
<PropertyGroup Condition="'$(Configuration)' == 'Debug'">
    <TypeScriptTarget>ES5</TypeScriptTarget>
    <TypeScriptJSXEmit>None</TypeScriptJSXEmit>
    <TypeScriptCompileOnSaveEnabled>True</TypeScriptCompileOnSaveEnabled>
    <TypeScriptNoImplicitAny>False</TypeScriptNoImplicitAny>
    <TypeScriptModuleKind>commonjs</TypeScriptModuleKind>
    <TypeScriptRemoveComments>False</TypeScriptRemoveComments>
    <TypeScriptOutFile />
    <TypeScriptOutDir />
    <TypeScriptGeneratesDeclarations>False</TypeScriptGeneratesDeclarations>
    <TypeScriptNoEmitOnError>True</TypeScriptNoEmitOnError>
    <TypeScriptSourceMap>True</TypeScriptSourceMap>
    <TypeScriptMapRoot />
    <TypeScriptSourceRoot />
    <TypeScriptExperimentalDecorators>True</TypeScriptExperimentalDecorators>
</PropertyGroup>
```
  
Gulp task adds all required node modules to the app/libs folder. 


Gulp task "compile-ts" could also be used for .ts compilation if you disable Visual Studio TS-Compilation via:

```
 <TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>
```

If you choose gulp to compile your .ts files, then you also have to add the "compile-ts" task as after-build binding in the task runner explorer:
```
/// <binding AfterBuild='libs, compile-ts' Clean='clean' />
```
