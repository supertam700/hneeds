import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useCustomer } from '../../context/CustomerContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { login, loading, error } = useCustomer();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      setEmail('');
      setPassword('');
      onClose();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      // Error is handled by the context
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    alert('Password reset email sent! (Demo)');
    setShowForgotPassword(false);
  };

  if (showForgotPassword) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Reset Password"
      >
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <Input
            id="forgot-email"
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            disabled={loading}
          />

          <div className="flex space-x-3">
            <Button
              type="submit"
              loading={loading}
              fullWidth
              variant="primary"
            >
              Send Reset Email
            </Button>
            <Button
              type="button"
              onClick={() => setShowForgotPassword(false)}
              fullWidth
              variant="outline"
            >
              Back to Login
            </Button>
          </div>
        </form>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <Input
          id="login-email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          disabled={loading}
        />

        <Input
          id="login-password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          disabled={loading}
        />

        <div className="flex justify-between items-center text-sm">
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-green-600 hover:text-green-700 transition-colors"
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          loading={loading}
          fullWidth
          variant="primary"
        >
          Sign In
        </Button>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
            Create one
          </a>
        </div>
      </form>
    </Modal>
  );
};