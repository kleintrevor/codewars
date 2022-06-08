/*
This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

***** BUG *****
#include <string>

std::string a == "code";
std::string b == "wa.rs";
std::string name == a + b;

*/

#include <string>

std::string a = "code";
std::string b = "wa.rs";
std::string name = a + b;