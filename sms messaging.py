# Function to simulate sending an SMS and getting user input
def send_sms(message):
  print(message)
  return input()


# Main menu
def main_menu():
  phone_number = send_sms("Please enter your phone number:")
  id_number = send_sms("Please enter your ID number:")
  send_sms("Welcome to gov't connect")

  main_menu_text = ("Make Payments\n1. Parking\n2. Daily Tax Payments\n")
  choice = send_sms(main_menu_text)
  if choice == '1':
    parking_menu()
  elif choice == '2':
    tax_menu()
  else:
    send_sms("Invalid choice. Please select a valid option.")


# Parking menu
def parking_menu():
  parking_menu_text = ("For Parking Services, select the area:\n"
                       "Press 1 for Langata\n"
                       "Press 2 for Kibera\n"
                       "Press 3 for Eastlands\n"
                       "Press 4 for Westlands\n"
                       "Press 5 for Kasarani\n"
                       "Press 6 for CBD\n")
  choice = send_sms(parking_menu_text)
  if choice in ['1', '2', '3', '4', '5', '6']:
    car_plate = send_sms("Please enter your car number plate:")
    parking_id = send_sms("Please enter your Parking ID:")
    send_sms("Enter the Amount Requested By The Agent")
    payment_choice = send_sms(
      "Press 1 to continue to payment\nPress 2 to go back to main menu")
    if payment_choice == '1':
      payment_pin = send_sms("Input your Mobile Money pin in the prompt sent")
      send_sms("A confirmation message will be sent to you after payment")
    elif payment_choice == '2':
      main_menu()
    else:
      send_sms("Invalid choice. Returning to main menu.")
      main_menu()
  else:
    send_sms("Invalid choice. Returning to main menu.")
    main_menu()


# Tax menu
def tax_menu():
  tax_menu_text = ("Taxes\nPress 1 for Business Permit Fee\n"
                   "Press 2 for Land Rates\n"
                   "Press 3 for Parking Fees\n"
                   "Press 4 for Advertising Fees\n"
                   "Press 5 for Single Business Permit\n"
                   "Press 6 for Market Stall Fees\n"
                   "Press 7 for Fire Inspection Fee\n"
                   "Press 8 for Health Inspection Fee\n")
  choice = send_sms(tax_menu_text)
  if choice in ['1', '2', '3', '4', '5', '6', '7', '8']:
    business_id = send_sms("Please enter your business ID:")
    send_sms("Booking for taxes...")
    # Add your tax booking logic here
  else:
    send_sms("Invalid choice. Returning to main menu.")
    main_menu()


# Starting the SMS simulation
if __name__ == "__main__":
  main_menu()
