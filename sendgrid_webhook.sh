function localtunnel {
  lt -s w3po34ujd32s --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done