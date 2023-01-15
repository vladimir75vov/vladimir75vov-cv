def main():
    test = ""

    while True:
        userInput = input()
        if userInput == "/":
            break

        test += "{" + f"""
        src: "{userInput}",
        width: 20,
        height: 20
        """ + "},"

    print(test)


if __name__ == "__main__":
    main()
