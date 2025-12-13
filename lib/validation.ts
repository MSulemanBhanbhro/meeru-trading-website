// Email validation function
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Password validation function
export const validatePassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

// Name validation function
export const validateName = (name: string): boolean => {
  // At least 2 characters, only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s'-]{2,}$/
  return nameRegex.test(name)
}

// Phone number validation function (for WhatsApp)
export const validatePhone = (phone: string): boolean => {
  // Basic phone number validation (10-15 digits, with optional country code)
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,15}$/
  return phoneRegex.test(phone)
}

// Form validation function that returns error messages
export const validateForm = (formData: Record<string, string>): Record<string, string> => {
  const errors: Record<string, string> = {}

  // Validate email if present
  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Validate password if present
  if (formData.password && !validatePassword(formData.password)) {
    errors.password = 'Password must be at least 8 characters with uppercase, lowercase, and number'
  }

  // Validate name if present
  if (formData.name && !validateName(formData.name)) {
    errors.name = 'Name must contain only letters, spaces, hyphens, and apostrophes'
  }

  // Validate phone if present
  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  return errors
}

// Check if form data is valid
export const isFormValid = (formData: Record<string, string>): boolean => {
  const errors = validateForm(formData)
  return Object.keys(errors).length === 0
}